/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { CreateCommunityResponseCommunityContestManagersItemContestsItemActionsItem } from './CreateCommunityResponseCommunityContestManagersItemContestsItemActionsItem';
import { CreateCommunityResponseCommunityContestManagersItemContestsItemScoreItem } from './CreateCommunityResponseCommunityContestManagersItemContestsItemScoreItem';
export declare const CreateCommunityResponseCommunityContestManagersItemContestsItem: core.serialization.ObjectSchema<
  serializers.CreateCommunityResponseCommunityContestManagersItemContestsItem.Raw,
  CommonApi.CreateCommunityResponseCommunityContestManagersItemContestsItem
>;
export declare namespace CreateCommunityResponseCommunityContestManagersItemContestsItem {
  interface Raw {
    contest_address: string;
    contest_id: number;
    start_time: string;
    end_time: string;
    score_updated_at?: string | null;
    score?:
      | CreateCommunityResponseCommunityContestManagersItemContestsItemScoreItem.Raw[]
      | null;
    actions?:
      | CreateCommunityResponseCommunityContestManagersItemContestsItemActionsItem.Raw[]
      | null;
  }
}
