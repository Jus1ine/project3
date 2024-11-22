<script>
    import "../app.css";

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="navbar">
    <a href="./" class="logo-container">
        <img src="Images/logo.png" alt="Logo" class="logo-img" />
        <span class="event-scheduling-text">Event Scheduling</span>
    </a>
    <button class="burger" on:click={toggleMenu} aria-label="Toggle navigation" aria-expanded={isMenuOpen}>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </button>
    <div class={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="./schedule" aria-label="Schedule" class="nav-link">
            <img src="Images/calendar.gif" alt="Schedule" class="nav-img" />
            <span class="nav-text">Schedule</span>
        </a>
        <a href="./contact" aria-label="Contact" class="nav-link">
            <img src="Images/contact.gif" alt="Contact" class="nav-img" />
            <span class="nav-text">Contact</span>
        </a>
    </div>
</div>

<main class="main-content">
    <slot></slot>
</main>

<style>
    :global(body) {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #ebebeb;
    }

    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        background-color: #ff6f00;
        padding: 0.5rem 1.5rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .navbar a {
        color: #ffffff;
        text-decoration: none;
        display: flex;
        align-items: center;
        margin-right: 15px;
        padding: 8px;
        border-radius: 8px;
        transition: all 0.3s ease;
    }

    .nav-link {
        display: inline-flex;
        align-items: center;
        padding: 0.4rem;
        transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s, color 0.3s;
    }

    .nav-img {
        width: 25px;
        height: auto;
        margin-right: 6px;
        transition: filter 0.1s ease, transform 0.1s ease;
    }

    .nav-text {
        font-size: 1rem;
        color: #ffffff;
        font-weight: 600;
        transition: color 0.3s ease;
    }

    .nav-link:hover, .nav-link:focus {
        background-color: #ffffff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        transform: scale(1.05);
        color: #ff6f00;
    }

    .nav-link:hover .nav-img, .nav-link:focus .nav-img {
        filter: brightness(0) saturate(100%) invert(34%) sepia(91%) saturate(6283%) hue-rotate(358deg) brightness(100%) contrast(104%);
    }

    .nav-link:hover .nav-text, .nav-link:focus .nav-text {
        color: #ff6f00;
    }

    .logo-container {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        border-radius: 8px;
        transition: background-color 0.3s, box-shadow 0.3s;
    }

    .logo-img {
        width: 40px;
        height: auto;
        margin-right: 8px;
        transition: transform 0.3s, filter 0.3s;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5)); /* Darker shadow */
    }

    .event-scheduling-text {
        font-size: 1.5rem;
        color: #ffffff;
        font-weight: 700;
        padding: 0.4rem;
        transition: color 0.3s, transform 0.3s, box-shadow 0.3s, background-color 0.3s ease;
        display: inline-block;
        border-radius: 8px;
    }

    .logo-container:hover {
        background-color: #ffffff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .logo-container:hover .logo-img {
        transform: scale(1.1);
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.7)); /* Stronger and darker shadow on hover */
    }

    .logo-container:hover .event-scheduling-text {
        color: #ff6f00;
        transform: scale(1.05);
    }

    .navbar-links {
        display: flex;
        gap: 15px;
        margin-left: auto;
        transition: all 0.3s ease;
    }

    .burger {
        display: none;
        flex-direction: column;
        cursor: pointer;
        background: none;
        border: none;
    }

    .line {
        width: 22px;
        height: 3px;
        background-color: #ffffff;
        margin: 4px 0;
        transition: 0.3s;
    }

    .main-content {
        padding: 1.5rem;
    }

    @media (max-width: 768px) {
        .navbar {
            flex-direction: column;
            align-items: flex-start;
            position: relative;
        }

        .burger {
            display: flex;
            position: absolute;
            top: 23px;
            right: 20px;
            z-index: 2;
        }

        .navbar-links {
            display: none;
            flex-direction: column;
            width: 100%;
            gap: 0;
            transition: all 0.3s ease;
        }

        .navbar-links.open {
            display: flex;
        }

        .navbar-links a {
            width: 100%;
            text-align: left;
            padding: 1rem;
            border-radius: 10px;
            transition: background-color 0.3s, box-shadow 0.3s;
        }

        .navbar-links .nav-link:hover, .navbar-links .nav-link:focus {
            background-color: #ffffff;
            color: #ff6f00;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transform: scale(1.05);
        }
    }

    @media (max-width: 480px) {
        .logo-img {
            width: 48px;
        }

        .event-scheduling-text {
            font-size: 1.1rem;
        }

        .main-content {
            padding: 1rem;
        }
    }
</style>
