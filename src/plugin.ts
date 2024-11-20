penpot.ui.open("Color Import", `?theme=${penpot.theme}`, {
  width: 320,
  height: 320,
});

penpot.ui.onMessage<Message>((message) => {
  if (message.type == "import-colors") {
    try {
      const lines = message.data.split("\n").filter((value) => value);

      for (const line of lines) {
        const [key, value] = line.split(":");

        if (key && value) {
          const color = penpot.library.local.createColor();
          color.color = value.trim();

          if (key.includes("/")) {
            const [path, name] = key.split("/");

            color.path = path.trim();
            color.name = name.trim();
          } else {
            color.name = key;
          }
        }
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
