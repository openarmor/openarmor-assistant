/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { EuiButton, EuiEmptyPrompt, EuiLink } from '@elastic/eui';
import React from 'react';

export const InviteMessage: React.FC = () => {
  // using https://mailtolinkgenerator.com/
  const mailtoLink =
    'mailto:openarmor-assistant@theopenarmor.org?subject=Requesting%20invite%20to%20OpenSearch%20Assistant%20Playground';

  return (
    <EuiEmptyPrompt
      iconType="search"
      titleSize="s"
      body={
        <>
          <p>Please login with the email that has access to the Assistant.</p>
          <p>
            To request access, please send an email to{' '}
            <EuiLink href={mailtoLink} external>
              opensearch-assistant@theopenarmor.org
            </EuiLink>
            .
          </p>
        </>
      }
      actions={
        <EuiButton color="primary" fill href={mailtoLink}>
          Request invite
        </EuiButton>
      }
    />
  );
};
