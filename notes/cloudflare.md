---
date: 2022-08-30
tags:

---

# Cloudflare

Since July 2022, my [[website]] is set up to use Cloudflare. It supposedly makes accessing the site faster, but I mainly like it for the DNS controls, which will hopefully be able to last over multiple hosting providers. This would let me avoid having to configure my preferred [[redirect]] setup every time I switch domains.

## DNS

The CNAME must point to dnnsmnstrr.github.io.

A wildcard `*` is proxied through cloudflare (IP can be anything, like 8.8.8.8) and intercepted by a page rule, which rewrites the URL to from `*.muensterer.codes/*` to the current [[api]] URL. The dynamic pattern allows the destination URL to include variables: `https://dnnsmnstrr.vercel.app/api/redirect/$1/$2`. This lets me access my redirects using subdomain notation (e.g. `dennis.muensterer.codes`).

### Nameserver Configuration

For namecheap: under `Domain` -> `Nameservers` select Custom DNS and enter the two nameservers below.

| Type | Value |
| NS | `kareem.ns.cloudflare.com` |
| NS | `wally.ns.cloudflare.com` |

## Zero Trust

Cloudflare Zero trust can be used to set up a tunnel to services running on an internal network, like [[homeassistant]] or invidious
