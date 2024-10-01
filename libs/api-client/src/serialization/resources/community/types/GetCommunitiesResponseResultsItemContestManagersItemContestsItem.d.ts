/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
import { GetCommunitiesResponseResultsItemContestManagersItemContestsItemScoreItem } from "./GetCommunitiesResponseResultsItemContestManagersItemContestsItemScoreItem";
import { GetCommunitiesResponseResultsItemContestManagersItemContestsItemActionsItem } from "./GetCommunitiesResponseResultsItemContestManagersItemContestsItemActionsItem";
export declare const GetCommunitiesResponseResultsItemContestManagersItemContestsItem: core.serialization.ObjectSchema<serializers.GetCommunitiesResponseResultsItemContestManagersItemContestsItem.Raw, CommonApi.GetCommunitiesResponseResultsItemContestManagersItemContestsItem>;
export declare namespace GetCommunitiesResponseResultsItemContestManagersItemContestsItem {
    interface Raw {
        contest_address: string;
        contest_id: number;
        start_time: string;
        end_time: string;
        score_updated_at?: string | null;
        score?: GetCommunitiesResponseResultsItemContestManagersItemContestsItemScoreItem.Raw[] | null;
        actions?: GetCommunitiesResponseResultsItemContestManagersItemContestsItemActionsItem.Raw[] | null;
    }
}