Login to Storyblok:

<sub style="color:lightblue;">When logging in, make sure to add the region (us).</sub>

```shell
npm run storyblok login
```

Download the schema of your Storyblok components:

```shell
npm run pull-sb-components
```
<sub style="color:lightblue;">If this command fails, logout and login again to Storyblok.</sub>

Generate TypeScript types based on the Storyblok downloaded schema:

```shell
npm run generate-sb-types
```

Remember to rerun the `pull-sb-components` and `generate-sb-types` scripts after you've made changes to your component schema in your Storyblok space.

<sub>In case of trouble look at this [documentation](https://github.com/storyblok/storyblok-cli)</sub>

Setup Storyblok local visual editor:

1. Open your global terminal and install [homebrew](https://brew.sh/) if you don't have it
2. Install mkcert:

```shell
brew install mkcert
mkcert -install
mkcert localhost
```
3. Generate the local certificate:
```shell
sudo npm install -g local-ssl-proxy
sudo local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
```