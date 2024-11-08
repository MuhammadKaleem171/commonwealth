/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from '../../../../core';
import { GetMembersResponseResultsItem } from './GetMembersResponseResultsItem';
export const GetMembersResponse = core.serialization.object({
  limit: core.serialization.number(),
  page: core.serialization.number(),
  totalPages: core.serialization.number(),
  totalResults: core.serialization.number(),
  results: core.serialization.list(GetMembersResponseResultsItem),
});
