/*
 *
 * Copyright 2018 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { NetworkType, Password, SimpleWallet} from 'nem2-sdk';

/* start block 01 */
const password = new Password('password');

const privateKey = process.env.PRIVATE_KEY as string; // Replace with a private key

const wallet = SimpleWallet.createFromPrivateKey('wallet-name', password, privateKey, NetworkType.MIJIN_TEST);

const account = wallet.open(password);

console.log('Your account address is:', account.address.pretty(), 'and its private key', account.privateKey);
/* end block 01 */
