<template>
    <div class="editor" :style="{ height: `100vh` }">
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Menu" active>
                    <b-form-textarea
                        id="menu-editor"
                        placeholder="Start typing your menu in markdown"
                        rows="24"
                        v-model="text"
                        @keydown.tab.prevent="handleKeydown"
                    ></b-form-textarea>
                </b-tab>
                <b-tab title="Settings">
                    <div class="editor--wrap" v-if="show">
                        <div class="form-group">
                            <label for="logo">Logo Width</label>
                            <div class="input-group">
                                <input type="number" class="form-control" id="logo" @change="handleChange('logoWidth', $event)" :value="styles.logoWidth">
                                <div class="input-group-append">
                                    <span class="input-group-text">%</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="logo-margin">Logo Margin</label>
                            <div class="input-group">
                                <input type="text" id="logo-margin" class="form-control" @change="handleChange('logoMargin', $event)" :value="styles.logoMargin">
                                <div class="input-group-append">
                                    <span class="input-group-text">inches</span>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="form-group">
                            <label for="title-color">
                                Dish Name Color
                            </label>
                            <span style="width: 1rem; height: 1rem; background-color: #d88474; display: inline-block; cursor: pointer; padding-top: 2px;" @click="handleChange('titleColor', { target: { value: '#e88474' } })"></span>
                            <input type="color" :value="`${styles.titleColor}`" @change="handleChange('titleColor', $event)" class="form-control" id="title-color">
                        </div> -->
                        <!-- <div class="form-group">
                            <label for="title-font-size">Dish Name Size</label>
                            <div class="input-group">
                                <input type="number" :value="styles.titleFontSize" @change="handleChange('titleFontSize', $event)" min="6" max="72" class="form-control" id="title-font-size">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">pt</span>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div class="form-group">
                            <label for="margins">Padding Between Items</label>
                            <div class="input-group">
                                <input :value="styles.margin" @change="handleChange('margin', $event)"  class="form-control" id="margins">
                                <div class="input-group-append">
                                    <span class="input-group-text">inches</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="description-color">Description Color</label>
                            <input type="color" @change="handleChange('descriptionColor', $event)"  :value="`${styles.descriptionColor}`" class="form-control" id="description-color">
                        </div>
                        <div class="form-group">
                            <label for="description-font-size">Description Size</label>
                            <div class="input-group">
                                <input type="number" :value="`${styles.descriptionFontSize}`" @change="handleChange('descriptionFontSize', $event)"  class="form-control" id="description-font-size">
                                <div class="input-group-append">
                                    <span class="input-group-text">pt</span>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div class="form-group">
                            <label for="price-color">Price Color</label>
                            <input type="color" :value="`${styles.priceColor}`" @change="handleChange('priceColor', $event)"  class="form-control" id="price-color">
                        </div>
                        <div class="form-group">
                            <label for="price-font-size">Price Size</label>
                            <div class="input-group">
                                <input type="number" :value="`${styles.priceFontSize}`" @change="handleChange('priceFontSize', $event)"  class="form-control" id="price-font-size">
                                <div class="input-group-append">
                                    <span class="input-group-text">pt</span>
                                </div>
                            </div>
                        </div> -->
                        <div class="form-group">
                            <label for="max-width">Max Width</label>
                            <div class="input-group">
                                <input type="number" min="0" max="100" :value="`${styles.maxWidth}`" @change="handleChange('maxWidth', $event)"  class="form-control" id="max-width">
                                <div class="input-group-append">
                                    <span class="input-group-text">%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-tab>
                <b-tab title="Help">
                    <h4>What is Markdown?</h4>
                    <p>
                        Markdown is a simple language that is used to format text - like adding <strong>bold</strong> words.<br>
                        Use Markdown to quickly style up Long Timber Brewing's printable menu.
                    </p>
                    <p>
                        Learn about Markdown's <a href="https://www.markdownguide.org/basic-syntax" title="Learn more about Markdown's basic syntax" target="_blank">basic syntax here</a>
                    </p>
                    <h4>How do I create a dinner or brunch menu item?</h4>
                    <p>
                        <pre>
                            <code>
                                ## Biscuits & Gravy **12**
                            </code>
                            <code>
                                Biscuits & gravy description
                            </code>
                        </pre>
                    </p>
                    <h4>How do I add the &quot;Less Gluten&quot; and/or &quot;Raw&quot; disclaimer icons?</h4>
                    <p>
                        Easily add either icon by typing in a keyword where you want them placed. They're automatically converted into images.
                        The keywords are <code>!raw!</code> & <code>!gluten!</code>
                    </p>
                    <p>
                        If an icon is used <em>anywhere</em> in the menu, <em>both</em> icon disclaimers will automatically be added to the bottom of the page
                    </p>
                    <p>
                        Examples:
                        <pre>
                            <code>## Pork Chop !raw! !gluten! **24**</code>
                        </pre>
                    </p>
                    <h4>What about choices of a particular dish?</h4>
                    <p>
                        Use <a href="https://www.markdownguide.org/basic-syntax#ordered-lists" target="_blank" title="Markdown Ordered Lists">ordered lists</a>
                        to create a single-line menu choice:
                        <pre>
                            <code>## St Lous Style Ribs !gluten!</code>
                            <code>1. **1/2 rack** 19</code>
                            <code>2. **full rack** 33</code>
                        </pre>
                    </p>
                    <h4>Testing</h4>
                    <p>Lorem ipsum dolor sit amet</p>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    name: 'editor',
    data () {
        return {
            show: true,
            text: ''
        }
    },
    props: {
        module: {
            type: String,
            required: true,
            default: ''
        }
    },
    computed: {
        buttonText: function () {
            return this.show ? 'Hide' : 'Show'
        },
        styles: function () {
            return this.$store.state.styles
        },
    },
    methods: {
        ...mapMutations({
            update: 'update'
        }),
        emit: function (e) {
            this.$emit('update', this.data)
        },
        handleChange: function (key, e) {
            this.update({ key, value: e.target.value })
        },
        handleKeydown: function (e) {
            const code = e.keyCode || e.which
            let text = this.text
            let start = event.target.selectionStart
            let textStart = text.slice(0, start)
            let textEnd = text.slice(start)
            this.text = `${textStart}\t${textEnd}`
            event.target.selectionEnd = event.target.selectionStart = start + 1
        }
    },
    watch: {
        text: function  (newVal, oldVal) {
            this.$store.commit(`${this.module}/set`, { key: 'text', value: newVal })
            // this.save({ key: this.module, value: newVal })
        }
    },
    created () {
        this.windowHeight = document.querySelector('body').offsetHeight;
    },
    mounted () {
        this.text = this.$store.state[this.module].text
    }
}
</script>
<style lang="scss">
.editor {
    position: relative;
    width: 100%;
    border-right: 1px solid darken(#f0f0f0, 10%);
    padding: 1rem;
    &--wrap {
        // position: fixed;
        // top: 0;
        // left: 0;
        // bottom: 0;
        // width: 50%;
        // border: none;
        // z-index: 10;
    }

    textarea.form-control {
        &::-webkit-scrollbar {
            width: 5px;
        }

        &::-webkit-scrollbar-track {
            background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background-color: $gray;
            border-radius: 0;
        }
    }

    label {
        font-weight: bold;
    }

    @media print {
        display: none;
    }

    pre {
        text-align: left;
        background-color: #f0f0f0;
        white-space: normal;

        code {
            display: block;
        }
    }
}
</style>
