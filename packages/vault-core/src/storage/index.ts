import { Storage } from '~/api/storage'
export class Storage implements Storage {
  private _storage = Record<string, unknown>()
}
