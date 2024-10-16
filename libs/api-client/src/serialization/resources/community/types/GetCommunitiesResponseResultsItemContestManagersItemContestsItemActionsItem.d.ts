/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { GetCommunitiesResponseResultsItemContestManagersItemContestsItemActionsItemAction } from './GetCommunitiesResponseResultsItemContestManagersItemContestsItemActionsItemAction';
export declare const GetCommunitiesResponseResultsItemContestManagersItemContestsItemActionsItem: core.serialization.ObjectSchema<
  serializers.GetCommunitiesResponseResultsItemContestManagersItemContestsItemActionsItem.Raw,
  CommonApi.GetCommunitiesResponseResultsItemContestManagersItemContestsItemActionsItem
>;
export declare namespace GetCommunitiesResponseResultsItemContestManagersItemContestsItemActionsItem {
  interface Raw {
    contest_address: string;
    contest_id: number;
    content_id: number;
    actor_address: string;
    action: GetCommunitiesResponseResultsItemContestManagersItemContestsItemActionsItemAction.Raw;
    content_url?: string | null;
    thread_id?: number | null;
    thread_title?: string | null;
    voting_power: number;
    created_at: string;
  }
}
