/*
 * @adonisjs/bouncer
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Exception } from '@poppinss/utils'

export class AuthorizationException extends Exception {
  public static raise(message: string, status: number) {
    return new this(message, status, 'E_AUTHORIZATION_FAILURE')
  }
}
