import { oilsPractical, oilsMagickal } from "./herbs-info.js";

function sortByKeys([key1], [key2]) {
    return key1.localeCompare(key2);
}

function formatOilsPractical() {
    return Object.entries(oilsPractical)
        .sort(sortByKeys)
        .map(([oil, info]) => {
            const entries = Object.entries(info);
            return `
                <details>
                    <summary>${oil}</summary>
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

function formatOilsMagickal() {
    return Object.entries(oilsMagickal)
        .sort(sortByKeys)
        .map(
            ([oil, info]) => `
                <details>
                    <summary>${oil}</summary>
                    <ul>
                        ${Object.entries(info)
                            .map(
                                ([key, value]) =>
                                    `<li>
                                        ${key.replace(
                                            "definition_",
                                            "SOURCE #"
                                        )}:
                                        ${value.text || value}
                                        ${
                                            value.planetary_rulerships
                                                ? `
                                                    <p>
                                                        Planetary rulers:
                                                        <ul>
                                                            ${value.planetary_rulerships
                                                                .map(
                                                                    (ruler) =>
                                                                        `<li>${ruler}</li>`
                                                                )
                                                                .join("")}
                                                        </ul>
                                                    </p>
                                                `
                                                : ""
                                        }
                                        ${
                                            value.diety_rulerships
                                                ? `
                                                    <p>
                                                        Diety rulers:
                                                        <ul>
                                                            ${value.diety_rulerships
                                                                .map(
                                                                    (ruler) =>
                                                                        `<li>${ruler}</li>`
                                                                )
                                                                .join("")}
                                                        </ul>
                                                    </p>
                                                `
                                                : ""
                                        }
                                    </li>`
                            )
                            .join("")}
                    </ul>
                </details>
            `
        )
        .join("<hr/>");
}

function formatRest(data) {
    return Object.entries(data)
        .sort(sortByKeys)
        .map(
            ([oil, info]) => `
                <details>
                    <summary>${oil}</summary>
                    <p>${info}</p>
                </details>
            `
        )
        .join("<hr/>");
}

export { formatOilsPractical, formatOilsMagickal, formatRest };
