import { useForm, SubmitHandler } from 'react-hook-form'
import React, { ReactNode } from 'react'
import { fetchProfile, saveProfile, userProfile } from '../../libs/storage'
import { storage, userSession } from '@/app/page';


export type FormFields = {
    name: string;
    location: string;
    jobTitle: string;
    about: string;
    imageURL: string;
    github: string;
    linkdin: string;
    website: string;
    x: string;
    children: ReactNode;
}

export const userInformation = {
    name: '',
    jobTitle: '',
    imageURL: '',
    about: '',
    location: '',
    socialLinks: {
        x: '',
        github: '',
        linkedin: '',
        website: '',
    }
}

const onSubmit: SubmitHandler<FormFields> = async (data) => {
    // Update the userInformation object with the form data
    userInformation.name = data.name;
    userInformation.jobTitle = data.jobTitle;
    userInformation.about = data.about;
    userInformation.imageURL = data.imageURL;
    userInformation.location = data.location;
    userInformation.socialLinks.github = data.github;
    userInformation.socialLinks.linkedin = data.linkdin;
    userInformation.socialLinks.website = data.website;
    userInformation.socialLinks.x = data.x;

// Save the updated userInformation to the storage
    await saveProfile(userInformation);
    console.log('Profile updated successfully');
// Print out the updated userInformation to the console
}


export const Form: React.FC<FormFields> = ({ children,...other }) => {
    const { handleSubmit, register } = useForm<FormFields>({
        mode: 'onChange'
    });


    console.log(userProfile());
    return (
        <div>
            <section className="flex justify-center items-center">
                <form className="w-1/2 h-full space-y-8" onSubmit={handleSubmit(onSubmit)} {...other}>
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
                                    {...register('name', { required: true })}
                                    type="text"
                                    placeholder=''
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
                                    {...register('jobTitle', { required: false })}
                                    type="text"
                                    placeholder=''
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
                                    {...register('about', { required: false })}
                                    rows={3}
                                    placeholder=''
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
                                    {...register('imageURL', { required: false })}
                                    type="text"
                                    placeholder=''
                                    className="flex-1 block w-full min-w-0 px-3 py-2 border text-gray-700 border-gray-300 rounded text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-gray-700">Location</label>
                                <div></div>
                            </div>
                            <div className="flex my-2 rounded">
                                <input
                                    {...register('location', { required: false })}
                                    type="text"
                                    placeholder=''
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
                                    {...register('x', { required: false })}
                                    type="text"
                                    placeholder=''
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
                                    {...register('github', { required: false })}
                                    type="text"
                                    placeholder=''
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
                                    {...register('website', { required: false })}
                                    type="text"
                                    placeholder=''
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
                                    {...register('linkdin', { required: false })}
                                    type="text"
                                    placeholder=''
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
