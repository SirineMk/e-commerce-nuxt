<template>
  <div id="customer_details" class="col2-set">
    <div class="col-6">
      <div class="woocommerce-billing-fields">
        <h3>Billing Details</h3>
        <p
          id="billing_country_field"
          class="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
        >
          <label class="" for="billing_country"
            >Civility <abbr title="required" class="required">*</abbr>
          </label>
          <select
            v-model="customer.civility"
            class="country_to_state country_select"
            id="billing_country"
            name="billing_country"
          >
            <option value="Mr">Mr</option>
            <option value="Mlle">Mlle</option>
            <option value="Mme">Mme</option>
          </select>
        </p>

        <p
          id="billing_first_name_field"
          class="form-row form-row-first validate-required"
        >
          <label class="" for="billing_first_name"
            >First Name <abbr title="required" class="required">*</abbr>
          </label>
          <input
            v-model="customer.firstName"
            type="text"
            value=""
            placeholder=""
            id="billing_first_name"
            name="billing_first_name"
            class="input-text "
          />
        </p>

        <p
          id="billing_last_name_field"
          class="form-row form-row-last validate-required"
        >
          <label class="" for="billing_last_name"
            >Last Name <abbr title="required" class="required">*</abbr>
          </label>
          <input
            v-model="customer.lastName"
            type="text"
            value=""
            placeholder=""
            id="billing_last_name"
            name="billing_last_name"
            class="input-text "
          />
        </p>
        <div class="clear"></div>

        <p id="billing_company_field" class="form-row form-row-wide">
          <label class="" for="billing_company">Company Name</label>
          <input
            v-model="customer.companyName"
            type="text"
            value=""
            placeholder=""
            id="billing_company"
            name="billing_company"
            class="input-text "
          />
        </p>

        <p
          id="billing_address_1_field"
          class="form-row form-row-wide address-field validate-required"
        >
          <label class="" for="billing_address_1"
            >Address <abbr title="required" class="required">*</abbr>
          </label>
          <input
            v-model="customer.billingAddress.address1"
            type="text"
            value=""
            placeholder="Street address"
            id="billing_address_1"
            name="billing_address_1"
            class="input-text "
          />
        </p>

        <p
          id="billing_address_2_field"
          class="form-row form-row-wide address-field"
        >
          <input
            v-model="customer.billingAddress.address2"
            type="text"
            value=""
            placeholder="Apartment, suite, unit etc. (optional)"
            id="billing_address_2"
            name="billing_address_2"
            class="input-text "
          />
        </p>

        <p
          id="billing_city_field"
          class="form-row form-row-wide address-field validate-required"
          data-o_class="form-row form-row-wide address-field validate-required"
        >
          <label class="" for="billing_city"
            >Town / City <abbr title="required" class="required">*</abbr>
          </label>
          <input
            v-model="customer.billingAddress.city"
            type="text"
            value=""
            placeholder="Town / City"
            id="billing_city"
            name="billing_city"
            class="input-text "
          />
        </p>

        <p
          id="billing_state_field"
          class="form-row form-row-first address-field validate-state"
          data-o_class="form-row form-row-first address-field validate-state"
        >
          <label class="" for="billing_state">Country</label>
          <input
            v-model="customer.billingAddress.country"
            type="text"
            id="billing_state"
            name="billing_state"
            placeholder="State / Country"
            value=""
            class="input-text "
          />
        </p>
        <p
          id="billing_postcode_field"
          class="form-row form-row-last address-field validate-required validate-postcode"
          data-o_class="form-row form-row-last address-field validate-required validate-postcode"
        >
          <label class="" for="billing_postcode"
            >Postcode <abbr title="required" class="required">*</abbr>
          </label>
          <input
            v-model="customer.billingAddress.postCode"
            type="text"
            value=""
            placeholder="Postcode / Zip"
            id="billing_postcode"
            name="billing_postcode"
            class="input-text "
          />
        </p>

        <div class="clear"></div>

        <p
          id="billing_email_field"
          class="form-row form-row-first validate-required validate-email"
        >
          <label class="" for="billing_email"
            >Email Address <abbr title="required" class="required">*</abbr>
          </label>
          <input
            v-model="customer.email"
            type="text"
            value=""
            placeholder=""
            id="billing_email"
            name="billing_email"
            class="input-text "
          />
        </p>

        <p
          id="billing_phone_field"
          class="form-row form-row-last validate-required validate-phone"
        >
          <label class="" for="billing_phone"
            >Phone <abbr title="required" class="required">*</abbr>
          </label>
          <input
            v-model.number="customer.phone"
            type="text"
            value=""
            placeholder=""
            id="billing_phone"
            name="billing_phone"
            class="input-text "
          />
        </p>
        <div class="clear"></div>
      </div>
    </div>

    <div class="col-6">
      <div class="woocommerce-shipping-fields">
        <h3 id="ship-to-different-address">
          <label class="checkbox" for="ship-to-different-address-checkbox"
            >Ship to a different address?</label
          >
          <input
            @click="displayBlock()"
            v-model="differentAddress"
            type="checkbox"
            value="1"
            name="ship_to_different_address"
            checked="checked"
            class="input-checkbox"
            id="ship-to-different-address-checkbox"
          />
        </h3>
        <div
          v-if="differentAddress"
          class="shipping_address"
          style="display: block;"
        >
          <p
            id="shipping_country_field"
            class="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
          >
            <label class="" for="shipping_country"
              >Civility <abbr title="required" class="required">*</abbr>
            </label>
            <select
              v-model="customer.shippingAddress.civility"
              class="country_to_state country_select"
              id="shipping_country"
              name="shipping_country"
            >
              <option value="AX">Mr</option>
              <option value="AF">Mlle</option>
              <option value="AF">Mme</option>
            </select>
          </p>

          <p
            id="shipping_first_name_field"
            class="form-row form-row-first validate-required"
          >
            <label class="" for="shipping_first_name"
              >First Name <abbr title="required" class="required">*</abbr>
            </label>
            <input
              type="text"
              value=""
              placeholder=""
              id="shipping_first_name"
              name="shipping_first_name"
              class="input-text "
              v-model="customer.shippingAddress.firstName"
            />
          </p>

          <p
            id="shipping_last_name_field"
            class="form-row form-row-last validate-required"
          >
            <label class="" for="shipping_last_name"
              >Last Name <abbr title="required" class="required">*</abbr>
            </label>
            <input
              type="text"
              value=""
              placeholder=""
              id="shipping_last_name"
              name="shipping_last_name"
              class="input-text "
              v-model="customer.shippingAddress.lastName"
            />
          </p>
          <div class="clear"></div>

          <p id="shipping_company_field" class="form-row form-row-wide">
            <label class="" for="shipping_company">Company Name</label>
            <input
              type="text"
              value=""
              placeholder=""
              id="shipping_company"
              name="shipping_company"
              class="input-text "
              v-model="customer.shippingAddress.companyName"
            />
          </p>

          <p
            id="shipping_address_1_field"
            class="form-row form-row-wide address-field validate-required"
          >
            <label class="" for="shipping_address_1"
              >Address <abbr title="required" class="required">*</abbr>
            </label>
            <input
              type="text"
              value=""
              placeholder="Street address"
              id="shipping_address_1"
              name="shipping_address_1"
              class="input-text "
              v-model="customer.shippingAddress.address1"
            />
          </p>

          <p
            id="shipping_address_2_field"
            class="form-row form-row-wide address-field"
          >
            <input
              type="text"
              value=""
              placeholder="Apartment, suite, unit etc. (optional)"
              id="shipping_address_2"
              name="shipping_address_2"
              class="input-text "
              v-model="customer.shippingAddress.address2"
            />
          </p>

          <p
            id="shipping_city_field"
            class="form-row form-row-wide address-field validate-required"
            data-o_class="form-row form-row-wide address-field validate-required"
          >
            <label class="" for="shipping_city"
              >Town / City <abbr title="required" class="required">*</abbr>
            </label>
            <input
              type="text"
              value=""
              placeholder="Town / City"
              id="shipping_city"
              name="shipping_city"
              class="input-text "
              v-model="customer.shippingAddress.city"
            />
          </p>

          <p
            id="shipping_state_field"
            class="form-row form-row-first address-field validate-state"
            data-o_class="form-row form-row-first address-field validate-state"
          >
            <label class="" for="shipping_state">Country</label>
            <input
              v-model="customer.shippingAddress.country"
              type="text"
              id="shipping_state"
              name="shipping_state"
              placeholder="State / Country"
              value=""
              class="input-text "
            />
          </p>
          <p
            id="shipping_postcode_field"
            class="form-row form-row-last address-field validate-required validate-postcode"
            data-o_class="form-row form-row-last address-field validate-required validate-postcode"
          >
            <label class="" for="shipping_postcode"
              >Postcode <abbr title="required" class="required">*</abbr>
            </label>
            <input
              type="text"
              value=""
              placeholder="Postcode / Zip"
              id="shipping_postcode"
              name="shipping_postcode"
              class="input-text "
              v-model="customer.shippingAddress.postCode"
            />
          </p>
          <div class="clear"></div>
        </div>
        <p id="order_comments_field" class="form-row notes">
          <label class="" for="order_comments">Order Notes</label>
          <textarea
            cols="5"
            rows="2"
            placeholder="Notes about your order, e.g. special notes for delivery."
            id="order_comments"
            class="input-text "
            name="order_comments"
            v-model="customer.orderNotes"
          ></textarea>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      differentAddress: false
    };
  },
  computed: {
    ...mapGetters(["customer"])
  },
  methods: {
    displayBlock(event) {
      if (!event.target.checked) {
          this.customer.shippingAddress = {
              civility: this.customer.civility,
              firstName: this.customer.firstName,
              lastName: this.customer.lastName,
              companyName: this.customer.companyName,
              address1: this.customer.billingAddress.address1,
              address2: this.customer.billingAddress.address2,
              city: this.customer.billingAddress.city,
              country: this.customer.billingAddress.country,
              postCode: this.customer.billingAddress.postCode
          };}

        this.differentAddress = !this.differentAddress;
      }
    }
};
</script>
