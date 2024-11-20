type MessageType = "generate-colors";

interface Message {
  type: MessageType;
  data: String;
}
