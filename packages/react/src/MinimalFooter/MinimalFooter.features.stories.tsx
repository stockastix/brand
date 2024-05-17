import React from 'react'
import {Meta} from '@storybook/react'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import {InlineLink, Text, ThemeProvider} from '@primer/react-brand'

import {MinimalFooter} from '.'

const PROJECT = 'MySuperProject'
const URL = 'https://example.com'

export default {
  title: 'Components/MinimalFooter/Features',
  component: MinimalFooter,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as Meta<typeof MinimalFooter>

export const MultipleFootnotes = () => (
  <MinimalFooter name={PROJECT} socialLinks={false}>
    <MinimalFooter.Footnotes>
      <Text>
        <sup>1</sup>By signing up, {PROJECT} may use your information to personalize and measure the effectiveness of
        enterprise business ads, including those you see off of {PROJECT}, promotional communications or marketing you
        receive related to the Enterprise Marketing Pages. We will send you relevant emails and promotional information
        based on your {PROJECT} profile and any additional information provided in the sign-up form. If you change your
        mind, you can unsubscribe at any time (an unsubscribe link is provided in every email). For more information on
        how {PROJECT} uses your personal information, please see the {PROJECT} Privacy Statement.
      </Text>
      <Text>
        <sup>2</sup>By signing up, {PROJECT} may use your information to personalize and measure the effectiveness of
        enterprise business ads, including those you see off of {PROJECT}, promotional communications or marketing you
        receive related to the Enterprise Marketing Pages. We will send you relevant emails and promotional information
        based on your {PROJECT} profile and any additional information provided in the sign-up form. If you change your
        mind, you can unsubscribe at any time (an unsubscribe link is provided in every email). For more information on
        how {PROJECT} uses your personal information, please see the{' '}
        <InlineLink href={`${URL}/en/site-policy/privacy-policies/{PROJECT}-privacy-statement`} target="_blank">
          {PROJECT} Privacy Statement
        </InlineLink>
        .
      </Text>
    </MinimalFooter.Footnotes>
    <MinimalFooter.Link href={`${URL}/organizations/enterprise_plan`}>Try {PROJECT} for free</MinimalFooter.Link>
    <MinimalFooter.Link href={`${URL}/enterprise`}>Enterprise</MinimalFooter.Link>
    <MinimalFooter.Link href={`${URL}/enterprise/contact`}>Email us</MinimalFooter.Link>
  </MinimalFooter>
)

export const MaximumLinks = () => (
  <MinimalFooter name={PROJECT} socialLinks={false}>
    <MinimalFooter.Link href="#">Link one</MinimalFooter.Link>
    <MinimalFooter.Link href="#">Link two</MinimalFooter.Link>
    <MinimalFooter.Link href="#">Link three</MinimalFooter.Link>
    <MinimalFooter.Link href="#">Link four</MinimalFooter.Link>
    <MinimalFooter.Link href="#">Link five</MinimalFooter.Link>
    <MinimalFooter.Link href="#">Link six</MinimalFooter.Link>
    <MinimalFooter.Link href="#">Link seven</MinimalFooter.Link>
  </MinimalFooter>
)
MaximumLinks.storyName = 'Maximum Links (5)'

export const MixedButtonsAndLinks = () => (
  <MinimalFooter name={PROJECT} socialLinks={false}>
    <MinimalFooter.Link href="#">Link one</MinimalFooter.Link>
    <MinimalFooter.Link as="button" onClick={() => alert('You have clicked Button one')}>
      Button one
    </MinimalFooter.Link>
    <MinimalFooter.Link as="button" onClick={() => alert('You have clicked Button two')}>
      Button two
    </MinimalFooter.Link>
    <MinimalFooter.Link as="button" onClick={() => alert('You have clicked Button three')}>
      Button three
    </MinimalFooter.Link>
  </MinimalFooter>
)

export const NoSocialLinks = () => <MinimalFooter name={PROJECT} socialLinks={false} />

export const FilteredSocialLinks = () => <MinimalFooter name={PROJECT} socialLinks={['facebook', 'x']} />

export const DefaultNarrow = () => (
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
DefaultNarrow.parameters = {
  viewport: {
    defaultViewport: 'iphonexr',
  },
}
DefaultNarrow.storyName = 'Default (Narrow viewport)'

export const DarkTheme = () => (
  <ThemeProvider colorMode="dark">
    <MinimalFooter name={PROJECT} />
  </ThemeProvider>
)
