/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from '../../../../core';
import { UpdateGroupResponseRequirementsItemThresholdDataSourceThreeSourceType } from './UpdateGroupResponseRequirementsItemThresholdDataSourceThreeSourceType';
export const UpdateGroupResponseRequirementsItemThresholdDataSourceThree =
  core.serialization.object({
    sourceType: core.serialization.property(
      'source_type',
      UpdateGroupResponseRequirementsItemThresholdDataSourceThreeSourceType,
    ),
    cosmosChainId: core.serialization.property(
      'cosmos_chain_id',
      core.serialization.string(),
    ),
    contractAddress: core.serialization.property(
      'contract_address',
      core.serialization.string(),
    ),
  });
