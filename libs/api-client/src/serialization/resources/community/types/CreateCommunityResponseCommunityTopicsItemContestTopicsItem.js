/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from '../../../../core';
export const CreateCommunityResponseCommunityTopicsItemContestTopicsItem =
  core.serialization.object({
    contestAddress: core.serialization.property(
      'contest_address',
      core.serialization.string(),
    ),
    topicId: core.serialization.property(
      'topic_id',
      core.serialization.number(),
    ),
    createdAt: core.serialization.property(
      'created_at',
      core.serialization.date(),
    ),
  });
