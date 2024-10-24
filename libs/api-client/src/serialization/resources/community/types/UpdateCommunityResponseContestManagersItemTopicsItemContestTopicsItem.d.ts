/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const UpdateCommunityResponseContestManagersItemTopicsItemContestTopicsItem: core.serialization.ObjectSchema<
  serializers.UpdateCommunityResponseContestManagersItemTopicsItemContestTopicsItem.Raw,
  CommonApi.UpdateCommunityResponseContestManagersItemTopicsItemContestTopicsItem
>;
export declare namespace UpdateCommunityResponseContestManagersItemTopicsItemContestTopicsItem {
  interface Raw {
    contest_address: string;
    topic_id: number;
    created_at: string;
  }
}
