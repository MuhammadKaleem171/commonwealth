/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as CommonApi from "../../../../api/index";
import * as core from "../../../../core";
export declare const CreateGroupResponseType: core.serialization.Schema<serializers.CreateGroupResponseType.Raw, CommonApi.CreateGroupResponseType>;
export declare namespace CreateGroupResponseType {
    type Raw = "chain" | "dao" | "token" | "offchain";
}
