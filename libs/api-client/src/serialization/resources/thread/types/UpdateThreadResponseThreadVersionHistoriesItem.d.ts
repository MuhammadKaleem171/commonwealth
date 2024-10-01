/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const UpdateThreadResponseThreadVersionHistoriesItem: core.serialization.ObjectSchema<serializers.UpdateThreadResponseThreadVersionHistoriesItem.Raw, CommonApi.UpdateThreadResponseThreadVersionHistoriesItem>;
export declare namespace UpdateThreadResponseThreadVersionHistoriesItem {
    interface Raw {
        id?: number | null;
        thread_id: number;
        address: string;
        body: string;
        timestamp: string;
        content_url?: string | null;
    }
}