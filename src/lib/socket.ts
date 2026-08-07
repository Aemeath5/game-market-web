import ReconnectingWebSocket from 'reconnecting-websocket'

function buildWebSocketUrl(path = '/ws') {
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${protocol}//${window.location.host}${normalizedPath}`
}

export function createMarketSocket(path = '/ws') {
  const socket = new ReconnectingWebSocket(buildWebSocketUrl(path), [], {
    connectionTimeout: 10_000,
    minReconnectionDelay: 1_000,
    maxReconnectionDelay: 10_000,
    reconnectionDelayGrowFactor: 1.5,
    maxRetries: Infinity,
  })

  socket.binaryType = 'arraybuffer'
  return socket
}
