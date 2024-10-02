/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from '../../../../core';
import { UpdateThreadResponseAddress } from './UpdateThreadResponseAddress';
import { UpdateThreadResponseCollaboratorsItem } from './UpdateThreadResponseCollaboratorsItem';
import { UpdateThreadResponseDiscordMeta } from './UpdateThreadResponseDiscordMeta';
import { UpdateThreadResponseLinksItem } from './UpdateThreadResponseLinksItem';
import { UpdateThreadResponseReactionsItem } from './UpdateThreadResponseReactionsItem';
import { UpdateThreadResponseSearch } from './UpdateThreadResponseSearch';
import { UpdateThreadResponseThreadVersionHistoriesItem } from './UpdateThreadResponseThreadVersionHistoriesItem';
import { UpdateThreadResponseTopic } from './UpdateThreadResponseTopic';
export const UpdateThreadResponse = core.serialization.object({
  id: core.serialization.number().optional(),
  addressId: core.serialization.property(
    'address_id',
    core.serialization.number(),
  ),
  title: core.serialization.string(),
  kind: core.serialization.string(),
  stage: core.serialization.string(),
  body: core.serialization.string().optional(),
  plaintext: core.serialization.string().optional(),
  url: core.serialization.string().optional(),
  topicId: core.serialization.property(
    'topic_id',
    core.serialization.number().optional(),
  ),
  pinned: core.serialization.boolean().optional(),
  communityId: core.serialization.property(
    'community_id',
    core.serialization.string(),
  ),
  viewCount: core.serialization.property(
    'view_count',
    core.serialization.number(),
  ),
  links: core.serialization.list(UpdateThreadResponseLinksItem).optional(),
  contentUrl: core.serialization.property(
    'content_url',
    core.serialization.string().optional(),
  ),
  readOnly: core.serialization.property(
    'read_only',
    core.serialization.boolean().optional(),
  ),
  hasPoll: core.serialization.property(
    'has_poll',
    core.serialization.boolean().optional(),
  ),
  canvasSignedData: core.serialization.property(
    'canvas_signed_data',
    core.serialization.string().optional(),
  ),
  canvasMsgId: core.serialization.property(
    'canvas_msg_id',
    core.serialization.string().optional(),
  ),
  createdAt: core.serialization.property(
    'created_at',
    core.serialization.date().optional(),
  ),
  updatedAt: core.serialization.property(
    'updated_at',
    core.serialization.date().optional(),
  ),
  lastEdited: core.serialization.property(
    'last_edited',
    core.serialization.date().optional(),
  ),
  deletedAt: core.serialization.property(
    'deleted_at',
    core.serialization.date().optional(),
  ),
  lastCommentedOn: core.serialization.property(
    'last_commented_on',
    core.serialization.date().optional(),
  ),
  markedAsSpamAt: core.serialization.property(
    'marked_as_spam_at',
    core.serialization.date().optional(),
  ),
  archivedAt: core.serialization.property(
    'archived_at',
    core.serialization.date().optional(),
  ),
  lockedAt: core.serialization.property(
    'locked_at',
    core.serialization.date().optional(),
  ),
  discordMeta: core.serialization.property(
    'discord_meta',
    UpdateThreadResponseDiscordMeta.optional(),
  ),
  reactionCount: core.serialization.property(
    'reaction_count',
    core.serialization.number(),
  ),
  reactionWeightsSum: core.serialization.property(
    'reaction_weights_sum',
    core.serialization.number(),
  ),
  commentCount: core.serialization.property(
    'comment_count',
    core.serialization.number(),
  ),
  activityRankDate: core.serialization.property(
    'activity_rank_date',
    core.serialization.date().optional(),
  ),
  createdBy: core.serialization.property(
    'created_by',
    core.serialization.string().optional(),
  ),
  profileName: core.serialization.property(
    'profile_name',
    core.serialization.string().optional(),
  ),
  search: UpdateThreadResponseSearch,
  address: core.serialization.property(
    'Address',
    UpdateThreadResponseAddress.optional(),
  ),
  topic: UpdateThreadResponseTopic.optional(),
  collaborators: core.serialization
    .list(UpdateThreadResponseCollaboratorsItem)
    .optional(),
  reactions: core.serialization
    .list(UpdateThreadResponseReactionsItem)
    .optional(),
  threadVersionHistories: core.serialization.property(
    'ThreadVersionHistories',
    core.serialization
      .list(UpdateThreadResponseThreadVersionHistoriesItem)
      .optional(),
  ),
});
