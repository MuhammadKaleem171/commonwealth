/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const UpdateCommunityRequestContestManagersItemContestsItemScoreItem: core.serialization.ObjectSchema<
  serializers.UpdateCommunityRequestContestManagersItemContestsItemScoreItem.Raw,
  CommonApi.UpdateCommunityRequestContestManagersItemContestsItemScoreItem
>;
export declare namespace UpdateCommunityRequestContestManagersItemContestsItemScoreItem {
  interface Raw {
    creator_address: string;
    content_id: string;
    votes: number;
    prize: string;
    tickerPrize?: number | null;
  }
}
