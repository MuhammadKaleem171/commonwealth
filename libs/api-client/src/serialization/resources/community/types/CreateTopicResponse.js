/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from '../../../../core';
import { CreateTopicResponseTopic } from './CreateTopicResponseTopic';
export const CreateTopicResponse = core.serialization.object({
  topic: CreateTopicResponseTopic,
  userId: core.serialization.property('user_id', core.serialization.number()),
});
