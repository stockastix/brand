import React from 'react'
import {Meta, StoryFn} from '@storybook/react'
import {InlineLink, Text} from '@primer/react-brand'

import {MinimalFooter} from '.'

const PROJECT = 'MySuperProject'
const URL = 'https://example.com'

export default {
  title: 'Components/MinimalFooter',
  component: MinimalFooter,
} as Meta<typeof MinimalFooter>

export const Playground: StoryFn<typeof MinimalFooter> = args => <MinimalFooter {...args} />

export const Default = () => (
  <MinimalFooter name={PROJECT}>
    <MinimalFooter.Footnotes>
      <Text>
        <sup>1</sup>By signing up, {URL} may use your information to personalize and measure the effectiveness of
        enterprise business ads, including those you see off of {URL}, promotional communications or marketing you
        receive related to the Enterprise Marketing Pages. We will send you relevant emails and promotional information
        based on your {URL} profile and any additional information provided in the sign-up form. If you change your
        mind, you can unsubscribe at any time (an unsubscribe link is provided in every email). For more information on
        how {URL} uses your personal information, please see the{' '}
        <InlineLink href={`${URL}/en/site-policy/privacy-policies/${PROJECT}-privacy-statement`} target="_blank">
          {URL} Privacy Statement
        </InlineLink>
        .
      </Text>
    </MinimalFooter.Footnotes>
    <MinimalFooter.Link href={`${URL}/organizations/enterprise_plan`}>Try {URL} for free</MinimalFooter.Link>
    <MinimalFooter.Link href={`${URL}/enterprise`}>Enterprise</MinimalFooter.Link>
    <MinimalFooter.Link href={`${URL}/enterprise/contact`}>Email us</MinimalFooter.Link>
  </MinimalFooter>
)
