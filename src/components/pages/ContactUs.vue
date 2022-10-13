<template>
  <div class="bg-[#2e2e2e]">
    <JumbotronWrapper bg="faqBg" title="CONTACT" />
    <main
      class="max-w-[1700px] mx-auto pt-[50px] pb-[100px] px-4 sm:px-12 md:px-16 lg:px-20 xl:px-[100px] 2xl:px-0"
    >
        <sectiion class="flex flex-col sm:flex-row gap-4 sm:gap-24 tracking-normal">
            <div class="sm:w-[50vw] p-2">
                <p class="whitespace-pre-wrap">DrivingPlates.com LLC</p>
                <p class="whitespace-pre-wrap py-5">phone: 323.800.2466</p>
                <p class="whitespace-pre-wrap">email: contact@drivingplates.com</p>
            </div>
            <form class="w-full p-2">
                <fieldset id="name">  
                    <legend class="">Name <span aria-hidden="true">*</span></legend>
                    <div class="flex w-full gap-4 mb-5">
                        <label class="grow">
                            <input class="w-full text-gray-500 p-2 rounded-sm" name="fname" type="text" maxlength="30" data-title="First" aria-required="true">
                            <span class="text-xs">First Name</span>
                        </label>
                        <label class="grow">
                            <input class="w-full text-gray-500 p-2  rounded-sm" name="lname"  type="text" maxlength="30" data-title="Last" aria-required="true">
                            <span class="text-xs">Last Name</span>
                        </label>
                    </div>
                </fieldset>
                <div class="mb-5">
                    <label for="email">Email Address
                        <span class="required" aria-hidden="true">*</span>
                    </label> 
                    <input class="w-full rounded-sm text-gray-500 p-2"  name="email" type="email" autocomplete="email" spellcheck="false" aria-required="true">
                </div>
                <div class="mb-5">
                    <label for="phone">Phone (Include Country Code if Applicable)</label>
                    <input class="w-full rounded-sm text-gray-500 p-2" type="text">
                </div>
                <div class="mb-5">  
                    <label for="title">Show Title and Episode (if applicable) <span class="required">*</span></label>
                    <input class="w-full rounded-sm text-gray-500 p-2" type="text" >
                </div>
                <div class="mb-5">
                    <label class="title" for="subject">Subject<span class="required" aria-hidden="true">*</span></label>
                    <input class="w-full rounded-sm text-gray-500 p-2" type="text">
                </div>
                <div class="mb-5">
                    <label class="title" for="message">Message <span class="required" aria-hidden="true">*</span>  
                </label>
                    <textarea class="w-full rounded-sm text-gray-500 p-2 rounded-sm" rows="3"></textarea>
                </div>
                <div class="flex justify-end pt-1">
                    <input class="hover:bg-[#bfbfbf] hover:text-[#1d1d1d] text-[#bfbfbf] font-['Heebo'] cursor-pointer border-2 border-[#bfbfbf] uppercase py-[1em] px-[3.5em] tracking-[.2em] text-sm" type="submit" value="Submit">
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

