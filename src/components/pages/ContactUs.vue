<template>
  <div class="bg-[#2e2e2e]">
    <JumbotronWrapper bg="faqBg" title="CONTACT" />
    <main
      class="max-w-[1700px] mx-auto pt-[50px] pb-[100px] px-4 sm:px-12 md:px-16 lg:px-20 xl:px-[100px] 2xl:px-0"
    >
      <sectiion class="flex flex-col sm:flex-row gap-4">
        <div class="sm:w-[50vw]">
            <p class="whitespace-pre-wrap">DrivingPlates.com LLC</p>
            <p class="whitespace-pre-wrap py-5">phone: 323.800.2466</p>
            <p class="whitespace-pre-wrap">email: contact@drivingplates.com</p>
        </div>
        <form>
            <div class="">
                <fieldset id="name1" class="">  
                <legend class="">Name <span aria-hidden="true">*</span></legend>
                    <div class="flex gap-2 mb-5">
                        <label class="">
                            <input class="w-full text-gray-500 p-4 text-[2.2rem] rounded-sm" name="fname" type="text" spellcheck="false" maxlength="30" data-title="First" aria-required="true">
                            <span class="text-xs">First Name</span>
                        </label>
                        <label class="caption">
                            <input class="w-full text-[2.2rem] text-gray-500 p-4  rounded-sm" name="lname"  type="text" spellcheck="false" maxlength="30" data-title="Last" aria-required="true">
                            <span class="text-xs">Last Name</span>
                        </label>
                    </div>
                </fieldset>
                <div class="mb-5">
                    <label for="email">Email Address
                        <span class="required" aria-hidden="true">*</span>
                    </label> 
                    <input class="w-full text-[2.2rem] rounded-sm text-gray-500 p-4 "  name="email" type="email" autocomplete="email" spellcheck="false" aria-required="true">
                </div>
                <div class="mb-5">
                    <label for="phone">Phone (Include Country Code if Applicable)</label>
                    <input class="w-full text-[2.2rem] rounded-sm text-gray-500 p-4 " type="text">
                </div>
                <div class="mb-5">  
                    <label for="title">Show Title and Episode (if applicable) <span class="required">*</span></label>
                    <input class="w-full text-[2.2rem] rounded-sm text-gray-500 p-4 " type="text" >
                </div>
                <div class="mb-5">
                    <label class="title" for="subject">Subject<span class="required" aria-hidden="true">*</span></label>
                    <input class="w-full text-[2.2rem] rounded-sm text-gray-500 p-4 " type="text">
                </div>
                <div class="mb-5">
                    <label class="title" for="message">Message <span class="required" aria-hidden="true">*</span>  
                </label>
                    <textarea class="w-full text-[2.2rem] rounded-sm text-gray-500 p-4 " id="textarea4-field" aria-required="true"></textarea>
                </div>
            </div>
            <div class="flex justify-end">
                <input class="" type="submit" value="Submit">
            </div>
        </form>
      </sectiion>
    </main>
  </div>
</template>
<script setup>
import JumbotronWrapper from "../JumbotronWrapper.vue";
</script>
<style>
    *{
        word-wrap: break-word;
    }
</style>

