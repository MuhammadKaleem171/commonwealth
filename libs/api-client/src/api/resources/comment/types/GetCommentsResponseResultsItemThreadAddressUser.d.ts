/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../index';
export interface GetCommentsResponseResultsItemThreadAddressUser {
  id?: number;
  email?: string;
  isAdmin?: boolean;
  disableRichText?: boolean;
  emailVerified?: boolean;
  selectedCommunityId?: string;
  emailNotificationInterval?: CommonApi.GetCommentsResponseResultsItemThreadAddressUserEmailNotificationInterval;
  promotionalEmailsEnabled?: boolean;
  isWelcomeOnboardFlowComplete?: boolean;
  profile: CommonApi.GetCommentsResponseResultsItemThreadAddressUserProfile;
  xpPoints?: number;
  profileTags?: CommonApi.GetCommentsResponseResultsItemThreadAddressUserProfileTagsItem[];
  apiKey?: CommonApi.GetCommentsResponseResultsItemThreadAddressUserApiKey;
  createdAt?: Date;
  updatedAt?: Date;
}
