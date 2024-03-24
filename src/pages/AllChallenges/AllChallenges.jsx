function AllChallenges() {
  return (
    <div className="h-full w-full">
      <header className="bg-white p-4 shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/path-to-your-profile-image.jpg"
              alt="Profile"
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-4">
              <p>Hi, Alice</p>
              <p>You doing good today!</p>
            </div>
          </div>
          <div>{/* Search icon and bell icon */}</div>
        </div>
      </header>

      <main className="h-auto p-4">
        <div className=" text-white p-5 rounded-2xl shadow-lg h-custom bg-custom">
          <h2 className="text-yellow text-xl font-body font-semibold">
            Own your wagers,
          </h2>
          <h2 className="text-yellow text-xl font-body font-semibold">
            {' '}
            Own your wins{' '}
          </h2>
          <p className="mt-12 text-xs">Compete and earn crypto with Catoff.</p>
        </div>

        {/* Challenges section */}
        <section className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Live Challenges</h3>
            <button className="text-blue-600">See all</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Cards for challenges */}
            {/* Repeat this structure for each challenge card */}
            <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
              {/* Image */}
              <div className="h-16 w-16 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4>Step Challenge</h4>
                <p>+ 53 Members</p>
                <p>10 days left</p>
                <div className="flex justify-between items-center mt-4">
                  <p>Live Prize Pool</p>
                  <p>$10,000</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blogs section */}
        <section className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Blogs</h3>
            <button className="text-blue-600">See all</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Cards for blog posts */}
            {/* Repeat this structure for each blog card */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="h-32 bg-gray-300"></div>
              <h5 className="mt-2">How Does It Work?</h5>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AllChallenges
