/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from '../../../../core';
export const GetCommentsResponseResultsItemThreadSearch =
  core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.record(
      core.serialization.string(),
      core.serialization.unknown(),
    ),
  ]);