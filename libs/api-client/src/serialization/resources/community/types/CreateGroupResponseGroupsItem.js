/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from '../../../../core';
import { CreateGroupResponseGroupsItemMetadata } from './CreateGroupResponseGroupsItemMetadata';
import { CreateGroupResponseGroupsItemRequirementsItem } from './CreateGroupResponseGroupsItemRequirementsItem';
export const CreateGroupResponseGroupsItem = core.serialization.object({
  id: core.serialization.number().optional(),
  communityId: core.serialization.property(
    'community_id',
    core.serialization.string(),
  ),
  metadata: CreateGroupResponseGroupsItemMetadata,
  requirements: core.serialization.list(
    CreateGroupResponseGroupsItemRequirementsItem,
  ),
  isSystemManaged: core.serialization.property(
    'is_system_managed',
    core.serialization.boolean().optional(),
  ),
  createdAt: core.serialization.property(
    'created_at',
    core.serialization.date().optional(),
  ),
  updatedAt: core.serialization.property(
    'updated_at',
    core.serialization.date().optional(),
  ),
});
