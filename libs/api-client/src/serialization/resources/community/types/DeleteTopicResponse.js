/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from '../../../../core';
export const DeleteTopicResponse = core.serialization.object({
  communityId: core.serialization.property(
    'community_id',
    core.serialization.string(),
  ),
  topicId: core.serialization.property('topic_id', core.serialization.number()),
});