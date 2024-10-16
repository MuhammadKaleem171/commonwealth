/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { GetCommunityResponseAddressesContestManagersItemContestsItemActionsItemAction } from './GetCommunityResponseAddressesContestManagersItemContestsItemActionsItemAction';
export declare const GetCommunityResponseAddressesContestManagersItemContestsItemActionsItem: core.serialization.ObjectSchema<
  serializers.GetCommunityResponseAddressesContestManagersItemContestsItemActionsItem.Raw,
  CommonApi.GetCommunityResponseAddressesContestManagersItemContestsItemActionsItem
>;
export declare namespace GetCommunityResponseAddressesContestManagersItemContestsItemActionsItem {
  interface Raw {
    contest_address: string;
    contest_id: number;
    content_id: number;
    actor_address: string;
    action: GetCommunityResponseAddressesContestManagersItemContestsItemActionsItemAction.Raw;
    content_url?: string | null;
    thread_id?: number | null;
    thread_title?: string | null;
    voting_power: number;
    created_at: string;
  }
}
