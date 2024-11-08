/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from '../../../../core';
export const DeleteThreadResponse = core.serialization.object({
  threadId: core.serialization.property(
    'thread_id',
    core.serialization.number(),
  ),
  canvasSignedData: core.serialization.property(
    'canvas_signed_data',
    core.serialization.string().optional(),
  ),
  canvasMsgId: core.serialization.property(
    'canvas_msg_id',
    core.serialization.string().optional(),
  ),
});
