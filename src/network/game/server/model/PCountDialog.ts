import { ServerProtPriority } from '#/network/game/server/codec/ServerProtPriority.js';
import OutgoingMessage from '#/network/game/server/OutgoingMessage.js';

export default class PCountDialog extends OutgoingMessage {
    priority = ServerProtPriority.BUFFERED;
}
