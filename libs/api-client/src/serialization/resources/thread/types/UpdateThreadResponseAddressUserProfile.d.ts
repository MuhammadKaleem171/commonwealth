/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { UpdateThreadResponseAddressUserProfileBackgroundImage } from './UpdateThreadResponseAddressUserProfileBackgroundImage';
export declare const UpdateThreadResponseAddressUserProfile: core.serialization.ObjectSchema<
  serializers.UpdateThreadResponseAddressUserProfile.Raw,
  CommonApi.UpdateThreadResponseAddressUserProfile
>;
export declare namespace UpdateThreadResponseAddressUserProfile {
  interface Raw {
    name?: string | null;
    email?: string | null;
    website?: string | null;
    bio?: string | null;
    avatar_url?: string | null;
    slug?: string | null;
    socials?: string[] | null;
    background_image?: UpdateThreadResponseAddressUserProfileBackgroundImage.Raw | null;
  }
}
