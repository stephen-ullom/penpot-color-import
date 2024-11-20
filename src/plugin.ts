penpot.ui.open("Bulk Import", `?theme=${penpot.theme}`, {
  width: 320,
  height: 320,
});

penpot.ui.onMessage<Message>((message) => {
  if (message.type == "generate-colors") {
    try {
      const lines = message.data.split("\n").filter((value) => value);

      for (const line of lines) {
        const [name, value] = line.split(":");

        const color = penpot.library.local.createColor();
        color.name = name.trim();
        color.color = value.trim();
      }
    } catch (error) {
      console.log(error);
    }
  }
});

// Update the theme in the iframe
penpot.on("themechange", (theme) => {
  penpot.ui.sendMessage({
    source: "penpot",
    type: "themechange",
    theme,
  });
});
