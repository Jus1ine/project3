<script>
    import { onMount } from 'svelte';
    let isLoaded = false;
    
    onMount(() => {
        isLoaded = true;
    });
</script>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        background: linear-gradient(135deg, #f6f8fd 0%, #f1f4f9 100%);
        min-height: 100vh;
        overflow-x: hidden;
    }

    .container {
        display: flex;
        align-items: center;
        max-width: 1400px;
        margin: 0 auto;
        padding: 5px;
        height: 75vh;
        position: relative;
    }

    .logo-container {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        opacity: 0;
        animation: slideIn 1s ease forwards;
    }

    .logo {
        width: 500px;
        height: auto;
        filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15));
    }

    .text-content {
        flex: 1;
        padding-left: 60px;
        opacity: 0;
        animation: fadeIn 1s ease forwards 0.5s;
    }

    .welcome-text {
        font-size: 42px;
        color: #2c3e50;
        margin: 0;
        font-weight: 600;
    }

    .title {
        font-size: 96px;
        font-weight: 800;
        background: linear-gradient(45deg, #2c3e50, #e47e3e);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0;
        line-height: 1;
    }

    .subtitle {
        font-size: 64px;
        font-weight: 700;
        color: #34495e;
        margin: 0;
        line-height: 1.1;
    }

    .tagline {
        font-size: 24px;
        color: #e47e3e;
        margin-top: 15px;
        font-weight: 600;
        letter-spacing: 0.5px;
    }

    @keyframes slideIn {
        from {
            transform: translateX(-50px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 1200px) {
        .container {
            padding: 30px;
        }

        .logo {
            width: 400px;
        }

        .title {
            font-size: 80px;
        }

        .subtitle {
            font-size: 54px;
        }
    }

    @media (max-width: 968px) {
        .container {
            flex-direction: column;
            justify-content: center;
            text-align: center;
            height: auto;
            padding: 20px;
        }

        .logo-container {
            justify-content: center;
            margin-bottom: 40px;
        }

        .text-content {
            padding-left: 0;
        }

        .logo {
            width: 350px;
        }

        .title {
            font-size: 64px;
        }

        .subtitle {
            font-size: 42px;
        }

        .welcome-text {
            font-size: 36px;
        }
    }

    @media (max-width: 480px) {
        .container {
            padding: 15px;
        }

        .logo {
            width: 280px;
        }

        .welcome-text {
            font-size: 28px;
        }

        .title {
            font-size: 48px;
        }

        .subtitle {
            font-size: 32px;
        }

        .tagline {
            font-size: 18px;
        }
    }
</style>

<div class="container">
    <div class="logo-container">
        <img src="Images/logo.png" alt="Event Scheduler Logo" class="logo" />
    </div>
    <div class="text-content">
        <p class="welcome-text">Welcome to</p>
        <p class="title">Event</p>
        <p class="subtitle">Scheduler</p>
        <p class="tagline">where scheduling your event happens.</p>
    </div>
</div>
