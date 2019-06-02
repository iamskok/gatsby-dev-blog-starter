const PURGE_TIMEOUT = 60 * 1000

const Vault = {
    data: {
      states: []
    },
    add(section, value) {
      this.data[section].push(value)
    },
    get(section) {
      return this.data[section]
    },
    purge() {
      const sections = Object.keys(this.data)
      sections.forEach(section => {
        let index = -1
        for (let i = 0; i < section.length; i++) {
          if (Date.now() - section[i].created > PURGE_TIMEOUT) {
            index = i
          }
        }
        this.data[section] = this.data[section].slice(index + 1)
      })
    }
}

let timer = setInterval(() => {
    Vault.purge()
}, 2500)

timer.unref()

module.exports = Vault