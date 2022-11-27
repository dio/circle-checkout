import * as assert from 'assert'
import {URL} from 'url'
import {IGitSourceSettings} from './git-source-settings'

export function getFetchUrl(settings: IGitSourceSettings): string {
  assert.ok(
    settings.repositoryOwner,
    'settings.repositoryOwner must be defined'
  )
  assert.ok(settings.repositoryName, 'settings.repositoryName must be defined')
  const serviceUrl = new URL('https://github.com') // Only support github.com for now.
  const encodedOwner = encodeURIComponent(settings.repositoryOwner)
  const encodedName = encodeURIComponent(settings.repositoryName)

  // "origin" is SCHEME://HOSTNAME[:PORT]
  return `${serviceUrl.origin}/${encodedOwner}/${encodedName}`
}
