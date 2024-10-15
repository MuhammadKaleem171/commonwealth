/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const GetCommentsResponseResultsItemReactionAddressUserProfileBackgroundImage: core.serialization.ObjectSchema<
  serializers.GetCommentsResponseResultsItemReactionAddressUserProfileBackgroundImage.Raw,
  CommonApi.GetCommentsResponseResultsItemReactionAddressUserProfileBackgroundImage
>;
export declare namespace GetCommentsResponseResultsItemReactionAddressUserProfileBackgroundImage {
  interface Raw {
    url?: string | null;
    imageBehavior?: string | null;
  }
}
