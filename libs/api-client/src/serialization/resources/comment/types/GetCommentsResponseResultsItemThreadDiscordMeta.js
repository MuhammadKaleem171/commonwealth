/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from '../../../../core';
import { GetCommentsResponseResultsItemThreadDiscordMetaUser } from './GetCommentsResponseResultsItemThreadDiscordMetaUser';
export const GetCommentsResponseResultsItemThreadDiscordMeta =
  core.serialization.object({
    user: GetCommentsResponseResultsItemThreadDiscordMetaUser,
    channelId: core.serialization.property(
      'channel_id',
      core.serialization.string(),
    ),
    messageId: core.serialization.property(
      'message_id',
      core.serialization.string(),
    ),
  });