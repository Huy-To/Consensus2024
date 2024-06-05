"use client"
import React, { ReactNode } from 'react'

export default function Form() {
    return (
        <div>
            <section className="text-center mt-6 mb-6">
                <span className="block text-5xl font-bold font-mono text-color-Logo">Eleutheria DEMO</span>
                <span className="mt-6 block text-3xl font-semibold font-mono text-white">Profile Sign Up</span>
            </section>
            <section className="flex justify-center items-center">
                <form action="" className="w-1/2 h-full space-y-8">
                    <div className="p-8 border-b md:col-span-1">
                        <div className="text-center text-lg font-medium leading-6 text-gray-900">Profile Information</div>
                        <div className="mt-2 text-sm text-gray-500 text-center">This information will be displayed publicly</div>
                    </div>
                    <div className="p-8 mt-5 border-b md:mt-0 md:col-span-2 grid grid-1 sm:grid-cols-2 gap-4">
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">Name</label>
                                <div></div>
                            </div>
                            <div className="flex my-2 rounded">
                                <input
                                    id="UserName"
                                    name="Name"
                                    type="UserName"
                                    className="flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">Job Title</label>
                                <div></div>
                            </div>
                            <div className="flex my-2 rounded">
                                <input
                                    id="JobTitle"
                                    name="Job Title"
                                    type="text"
                                    className="flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">About</label>
                                <div></div>
                            </div>
                            <div className="flex my-2 rounded">
                                <textarea
                                    id="About"
                                    name="About"
                                    rows={3}
                                    className="flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm"
                                ></textarea>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">Profile image url</label>
                                <div></div>
                            </div>
                            <div className="flex my-2 rounded">
                                <input
                                    id="profileImageUrl"
                                    name="profileImageUrl"
                                    type="text"
                                    className="flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="p-8 border-b md:col-span-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Social links</h3>
                        <p className="mt-2 text-sm text-gray-500 text-center">
                            You can add socials like LinkedIn, Github, X, and your personal website
                        </p>
                    </div>
                    <div className="p-8 mt-5 border-b md:mt-0 md:col-span-2 grid grid-1 sm:grid-cols-2 gap-4">
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">X</label>
                                <div></div>
                            </div>
                            <div className="flex my-2 rounded">
                                <input
                                    id="socials.X"
                                    name="socials.X"
                                    type="text"
                                    className="flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">Github</label>
                                <div></div>
                            </div>
                            <div className="flex my-2 rounded">
                                <input
                                    id="socials.github"
                                    name="socials.github"
                                    type="text"
                                    className="flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">Website</label>
                                <div></div>
                            </div>
                            <div className="flex my-2 rounded">
                                <input
                                    id="socials.website"
                                    name="socials.website"
                                    type="text"
                                    className="flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">Linkedin</label>
                                <div></div>
                            </div>
                            <div className="flex my-2 rounded">
                                <input
                                    id="socials.linkedin"
                                    name="socials.linkedin"
                                    type="text"
                                    className="flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-8 space-x-4">
                        <button
                            type="submit"
                            className="text-white bg-gray-900 border border-gray-300 hover:opacity-90 inline-flex items-center px-4 py-2 text-sm space-x-2 transition rounded-xl cursor-pointer font-medium relative"
                        >
                            Update profile
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}
