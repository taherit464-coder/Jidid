export const config = { runtime: "\x65\x64\x67\x65" };

const _0xR = ["VEFSR0VUX0RPTUFJTg==", "aG9zdA==", "Y29ubmVjdGlvbg==", "a2VlcC1hbGl2ZQ==", "cHJveHktYXV0aGVudGljYXRl", "cHJveHktYXV0aG9yaXphdGlvbg==", "dGU=", "dHJhaWxlcg==", "dHJhbnNmZXItZW5jb2Rpbmc=", "dXBncmFkZQ==", "Zm9yd2FyZGVk", "eC1mb3J3YXJkZWQtaG9zdA==", "eC1mb3J3YXJkZWQtcHJvdG8=", "eC1mb3J3YXJkZWQtcG9ydA==", "eC12ZXJjZWwt", "eC1yZWFsLWlw", "eC1mb3J3YXJkZWQtZm9y", "aGFsZg==", "bWFudWFs"];
const _0xO = (i) => atob(_0xR[i]);

const _0xBASE = (process.env[_0xO(0)] || "")["replace"](/\/$/, "");
const _0xS = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(_0xO));

export default async function (_0xREQ) {
  if (!_0xBASE) return new Response(null, { status: 500 });

  try {
    const _0xP = _0xREQ.url.indexOf("/", 8);
    const _0xURL = _0xP === -1 ? _0xBASE + "/" : _0xBASE + _0xREQ.url.slice(_0xP);

    const _0xH = new Headers();
    let _0xIP = null;

    for (const [_0xK, _0xV] of _0xREQ.headers) {
      if (_0xS.has(_0xK) || _0xK.startsWith(_0xO(14))) continue;
      if (_0xK === _0xO(15)) { _0xIP = _0xV; continue; }
      if (_0xK === _0xO(16)) { if (!_0xIP) _0xIP = _0xV; continue; }
      _0xH.set(_0xK, _0xV);
    }

    if (_0xIP) _0xH.set(_0xO(16), _0xIP);

    const _0xM = _0xREQ.method;
    return await fetch(_0xURL, {
      method: _0xM,
      headers: _0xH,
      body: !["\x47\x45\x54", "\x48\x45\x41\x44"].includes(_0xM) ? _0xREQ.body : undefined,
      duplex: _0xO(17),
      redirect: _0xO(18)
    });
  } catch (_0xERR) {
    return new Response(null, { status: 502 });
  }
}
