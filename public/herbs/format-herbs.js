import sections from "../data-copy1.js";

export default function formatHerbs() {
    return Object.entries(process())
        .map(([herb, info]) => {
            const entries = Object.entries(info);
            return `
                <details>
                    <summary>${herb}</summary>
                    ${
                        entries.length === 1
                            ? `
                                ${
                                    !entries[0][0] ||
                                    entries[0][0] === "_default"
                                        ? ""
                                        : `<span class="sci-name">${entries[0][0]}</span>`
                                }
                                <p>
                                    ${entries[0][1]}
                                </p>
                            `
                            : entries
                                  .map(
                                      ([sciName, data]) => `
                                        <details>
                                            <summary>
                                                <em>${sciName}</em>
                                            </summary>
                                            <p>${data}</p>
                                        </details>
                                    `
                                  )
                                  .join("")
                    }
                </details>
            `;
        })
        .join("<hr/>");
}

function process() {
    const herbs = {},
        herbInfo = sections["Herbs Vol. 2"]["MORE HERBS"];
    let common_name,
        scientific_name,
        definition = "";
    for (let i = 0; i < herbInfo.length; i++) {
        const line = herbInfo[i],
            isLastLine = i === herbInfo.length - 1,
            isHeader = line.match(/}?: [A-Z]/);
        if (!isHeader || isLastLine) {
            definition += " " + line.trim();
        }
        if ((isLastLine || isHeader) && common_name && definition) {
            !herbs[common_name] && (herbs[common_name] = {});
            herbs[common_name][scientific_name || "_default"] = definition
                .replaceAll("{", "(")
                .replaceAll("}", ")");
        }
        if (isHeader) {
            const [key, firstLine] = line.split(":");
            let [common, ...scientific] = key.split("{");
            common_name = common.trim();
            scientific_name = scientific
                .join("")
                .replaceAll("}", "")
                .replace("Spike", "(Spike Lavender)") // for Lavender
                .trim();
            definition = firstLine.trim();
        }
    }
    // delete redundant data:
    herbs.Lavender = { ...herbs.Lavender, ...herbs.Lavandin };
    delete herbs.Lavandin;
    delete herbs["Lavender (Mont Blanc - High Alt)"];
    return herbs;
}
