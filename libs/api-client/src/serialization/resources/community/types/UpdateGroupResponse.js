/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from '../../../../core';
import { UpdateGroupResponseMetadata } from './UpdateGroupResponseMetadata';
import { UpdateGroupResponseRequirementsItem } from './UpdateGroupResponseRequirementsItem';
export const UpdateGroupResponse = core.serialization.object({
  id: core.serialization.number().optional(),
  communityId: core.serialization.property(
    'community_id',
    core.serialization.string().optional(),
  ),
  metadata: UpdateGroupResponseMetadata.optional(),
  requirements: core.serialization
    .list(UpdateGroupResponseRequirementsItem)
    .optional(),
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
