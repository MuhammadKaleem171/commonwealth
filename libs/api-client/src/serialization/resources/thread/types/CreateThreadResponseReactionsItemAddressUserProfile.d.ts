/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { CreateThreadResponseReactionsItemAddressUserProfileBackgroundImage } from './CreateThreadResponseReactionsItemAddressUserProfileBackgroundImage';
export declare const CreateThreadResponseReactionsItemAddressUserProfile: core.serialization.ObjectSchema<
  serializers.CreateThreadResponseReactionsItemAddressUserProfile.Raw,
  CommonApi.CreateThreadResponseReactionsItemAddressUserProfile
>;
export declare namespace CreateThreadResponseReactionsItemAddressUserProfile {
  interface Raw {
    name?: string | null;
    email?: string | null;
    website?: string | null;
    bio?: string | null;
    avatar_url?: string | null;
    slug?: string | null;
    socials?: string[] | null;
    background_image?: CreateThreadResponseReactionsItemAddressUserProfileBackgroundImage.Raw | null;
  }
}
