
let monacoOptions = {
    language: "html", // default
    automaticLayout: true,
    minimap: { enabled: false },
    value: ""
}

let editor;

function initializeMonacoEditor(id, language, defaultValue) {
    if (language)
        monacoOptions.language = language;

    if (defaultValue)
        monacoOptions.value = defaultValue;

    editor = monaco.editor.create(document.getElementById(id), monacoOptions);
}

function getEditorValue() {
    return editor.getValue();
}