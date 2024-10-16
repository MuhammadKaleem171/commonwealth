/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from '../../../../../core';
import { CreateThreadRequestDiscordMeta } from '../../types/CreateThreadRequestDiscordMeta';
import { CreateThreadRequestKind } from '../../types/CreateThreadRequestKind';
export const CreateThreadRequest = core.serialization.object({
  communityId: core.serialization.property(
    'community_id',
    core.serialization.string(),
  ),
  topicId: core.serialization.property('topic_id', core.serialization.number()),
  title: core.serialization.string(),
  body: core.serialization.string(),
  canvasSignedData: core.serialization.property(
    'canvas_signed_data',
    core.serialization.string().optional(),
  ),
  canvasMsgId: core.serialization.property(
    'canvas_msg_id',
    core.serialization.string().optional(),
  ),
  kind: CreateThreadRequestKind,
  stage: core.serialization.string(),
  url: core.serialization.string().optional(),
  readOnly: core.serialization.property(
    'read_only',
    core.serialization.boolean(),
  ),
  discordMeta: core.serialization.property(
    'discord_meta',
    CreateThreadRequestDiscordMeta.optional(),
  ),
});
