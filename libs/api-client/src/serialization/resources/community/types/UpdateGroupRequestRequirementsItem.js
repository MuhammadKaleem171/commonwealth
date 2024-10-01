/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from '../../../../core';
import { UpdateGroupRequestRequirementsItemAllow } from './UpdateGroupRequestRequirementsItemAllow';
import { UpdateGroupRequestRequirementsItemThreshold } from './UpdateGroupRequestRequirementsItemThreshold';
export const UpdateGroupRequestRequirementsItem = core.serialization
  .union('rule', {
    threshold: UpdateGroupRequestRequirementsItemThreshold,
    allow: UpdateGroupRequestRequirementsItemAllow,
  })
  .transform({
    transform: (value) => value,
    untransform: (value) => value,
  });