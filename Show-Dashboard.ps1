# Show-Dashboard.ps1
# Visualizador de Progreso en Terminal - Café Jade Palenque
# Arquitectura MCP y Automatización

$esc = [char]27
$reset = "$esc[0m"
$bold = "$esc[1m"
$dim = "$esc[2m"
$italic = "$esc[3m"
$underline = "$esc[4m"

# Paleta Monocromática de Alto Contraste (Sleek Dark Mode)
$fgWhite = "$esc[38;2;255;255;255m"
$fgGray = "$esc[38;2;160;160;160m"
$fgDarkGray = "$esc[38;2;80;80;80m"
$fgAccent = "$esc[38;2;0;255;136m" # Verde Neón Premium para progreso/activos
$fgWarn = "$esc[38;2;255;170;0m" # Ámbar para "En Progreso"
$fgSuccess = "$esc[38;2;0;220;255m" # Cyan para completado

Clear-Host

Write-Host "$bold$fgAccent--- [ CONECTANDO CON NOTION MCP ] ------------------------------------$reset" -NoNewline
if ([string]::IsNullOrWhiteSpace($env:NOTION_API_TOKEN)) {
    Write-Host "`r$bold$fgWarn--- [ MODO OFFLINE / FALTA NOTION_API_TOKEN ] ------------------------------$reset`n"
    $connectionSuccess = $false
} else {
$headers = @{
    "Authorization" = "Bearer $env:NOTION_API_TOKEN"
    "Notion-Version" = "2022-06-28"
    "Content-Type" = "application/json; charset=utf-8"
}
}

# IDs de páginas en Notion
$tareas = @(
    @{ id = "3687debf-5dfb-81cb-95d6-f861551c4fe2"; title = "Etapa 1: Planificacion, Wireframes y Specs"; index = 1 },
    @{ id = "3687debf-5dfb-81d6-ad67-ec71ae9712b2"; title = "Etapa 2: Construccion Base del Frontend - Locofy Setup"; index = 2 },
    @{ id = "3687debf-5dfb-8103-91a3-d60aed9f6421"; title = "Etapa 3: Pulido UX/UI, SEO y Go-Live"; index = 3 }
)

$taskData = @()
if ($null -eq $connectionSuccess) {
    $connectionSuccess = $true
}

try {
    if (-not $connectionSuccess) {
        throw "NOTION_API_TOKEN no configurado"
    }

    foreach ($tarea in $tareas) {
        $uri = "https://api.notion.com/v1/blocks/$($tarea.id)/children"
        $res = Invoke-RestMethod -Uri $uri -Method Get -Headers $headers -TimeoutSec 5
        
        $subtasks = @()
        $prompt = ""
        
        foreach ($block in $res.results) {
            if ($block.type -eq "to_do") {
                $subtasks += @{
                    text = $block.to_do.rich_text.plain_text
                    checked = $block.to_do.checked
                }
            } elseif ($block.type -eq "code") {
                $prompt = $block.code.rich_text.plain_text
            }
        }
        
        $taskData += @{
            title = $tarea.title
            index = $tarea.index
            subtasks = $subtasks
            prompt = $prompt
        }
    }
    Write-Host "`r$bold$fgSuccess--- [ CONECTADO EXITOSAMENTE ] -----------------------------------------$reset`n"
} catch {
    $connectionSuccess = $false
    Write-Host "`r$bold$fgWarn--- [ MODO OFFLINE / CACHE LOCAL ] ---------------------------------------$reset`n"
    
    # Datos de respaldo (Caché local offline en base a los archivos JSON del brain)
    $taskData = @(
        @{
            title = "Etapa 1: Planificacion, Wireframes y Specs"
            index = 1
            subtasks = @(
                @{ text = "Definir el Sitemap: secciones Inicio, Menu, Historia, Eventos y Contacto."; checked = $false },
                @{ text = "Disenar Wireframes monocromaticos de baja fidelidad para movil y pantalla tactil."; checked = $false },
                @{ text = "Documentar specs.md: paleta de colores, tipografia y componentes basicos."; checked = $false }
            )
            prompt = "Genera un archivo specs.md en d:\CajeJade con diseno monocromatico minimalista de alto contraste. Define el sitemap completo de Cafe Jade Palenque con maximo 5 secciones y wireframes estructurales para pantallas moviles y tactiles."
        },
        @{
            title = "Etapa 2: Construccion Base del Frontend - Locofy Setup"
            index = 2
            subtasks = @(
                @{ text = "Sincronizar el diseno de Figma con Locofy MCP usando las credenciales precargadas."; checked = $false },
                @{ text = "Generar maquetacion base en HTML y CSS minimalista de alto contraste para la pagina principal."; checked = $false },
                @{ text = "Maquetar la galeria interactiva de cafes y postres con botones tactiles grandes y responsivos."; checked = $false },
                @{ text = "Validar responsividad local y realizar la primera entrega visual al cliente."; checked = $false }
            )
            prompt = "Inicializa el servidor Locofy MCP y genera la maquetacion visual interactiva en HTML y CSS puro para las secciones del sitio de Cafe Jade Palenque, usando paleta de alto contraste monocromatica y componentes responsivos tactiles definidos en specs.md."
        },
        @{
            title = "Etapa 3: Pulido UX/UI, SEO y Go-Live"
            index = 3
            subtasks = @(
                @{ text = "Integrar micro-animaciones hover/active y transiciones CSS optimizadas para pantallas tactiles."; checked = $false },
                @{ text = "Optimizar SEO tecnico: titulos, meta-descripciones unicas y estructura semantica HTML5."; checked = $false },
                @{ text = "Desplegar en servidor local, validar compatibilidad tactil y presentar revision final al cliente para Go-Live."; checked = $false }
            )
            prompt = "Optimiza el SEO del sitio de Cafe Jade Palenque y agrega micro-animaciones sutiles de alto rendimiento CSS en los elementos interactivos del menu tactil. Al finalizar, genera un walkthrough de verificacion completo para la entrega final al cliente."
        }
    )
}

# Calcular progreso general
$totalTasks = 0
$completedTasks = 0
foreach ($stage in $taskData) {
    foreach ($sub in $stage.subtasks) {
        $totalTasks++
        if ($sub.checked) { $completedTasks++ }
    }
}
$overallProgress = 0
if ($totalTasks -gt 0) {
    $overallProgress = [Math]::Round(($completedTasks / $totalTasks) * 100)
}

# --- RENDERIZADO DEL DASHBOARD ---

$cols = 80
$borderLine = "=" * ($cols - 2)

Write-Host "$bold$fgWhite+$borderLine+$reset"
Write-Host "$bold$fgWhite|   $fgAccent CAFE JADE PALENQUE - TABLERO AUTOMATIZADO MCP                    $fgWhite|"
Write-Host "$bold$fgWhite|   $fgGray Estado actual de las Etapas de Desarrollo                         $fgWhite|"
Write-Host "$bold$fgWhite+$borderLine+$reset"

# Widget de Progreso General
$barLength = 30
$filledLength = [Math]::Round(($overallProgress / 100) * $barLength)
$emptyLength = $barLength - $filledLength
$progressBar = "$fgAccent" + ("#" * $filledLength) + "$fgDarkGray" + ("." * $emptyLength) + "$reset"

Write-Host " $bold$fgWhite+-- [ RESUMEN GLOBAL ] --------------------------------------------------------+$reset"
Write-Host "  PROGRESO GENERAL: [ $progressBar ] $bold$fgAccent$($overallProgress)%$reset ($completedTasks/$totalTasks Tareas)"
if ($connectionSuccess) {
    Write-Host "  CONEXION NOTION:  $fgAccent ONLINE (Sincronizado en tiempo real)$reset"
} else {
    Write-Host "  CONEXION NOTION:  $fgWarn OFFLINE (Mostrando cache local)$reset"
}
Write-Host " $bold$fgWhite+-----------------------------------------------------------------------------+$reset`n"

# Renderizar cada Etapa
foreach ($stage in $taskData) {
    $stageTotal = $stage.subtasks.Count
    $stageDone = 0
    foreach ($sub in $stage.subtasks) { if ($sub.checked) { $stageDone++ } }
    $stagePct = 0
    if ($stageTotal -gt 0) {
        $stagePct = [Math]::Round(($stageDone / $stageTotal) * 100)
    }
    
    # Colores según el estado de la etapa
    $stageColor = $fgDarkGray
    $statusText = "PENDIENTE"
    if ($stagePct -eq 100) {
        $stageColor = $fgSuccess
        $statusText = "COMPLETADO"
    } elseif ($stagePct -gt 0) {
        $stageColor = $fgWarn
        $statusText = "EN PROCESO"
    } elseif ($($stage.index) -eq 1) {
        $stageColor = $fgAccent
        $statusText = "ACTIVO / INICIAR"
    }
    
    Write-Host " $bold$stageColor> $($stage.title) [$($statusText) - $($stagePct)%]$reset"
    Write-Host "   $fgDarkGray+---------------------------------------------------------------------------$reset"
    
    foreach ($sub in $stage.subtasks) {
        if ($sub.checked) {
            Write-Host "   $fgDarkGray|   $fgSuccess[X]  $fgWhite$($sub.text)$reset"
        } else {
            Write-Host "   $fgDarkGray|   $fgDarkGray[ ]  $fgGray$($sub.text)$reset"
        }
    }
    
    # Mostrar el Prompt Spec-Driven
    Write-Host "   $fgDarkGray|$reset"
    Write-Host "   $fgDarkGray|   $italic$fgGray Prompt de Automatización Spec-Driven (Antigravity):$reset"
    Write-Host "   $fgDarkGray|   +------------------------------------------------------------------+$reset"
    
    # Formatear el prompt para que no se desborde
    $words = $($stage.prompt) -split ' '
    $line = ""
    foreach ($word in $words) {
        if (($line + " " + $word).Length -gt 64) {
            # Rellenar con espacios
            $pad = 64 - $line.Length
            $spaces = " " * $pad
            Write-Host "   $fgDarkGray|   | $fgGray$($line)$($spaces)$fgDarkGray|$reset"
            $line = $word
        } else {
            if ($line -eq "") { $line = $word } else { $line = "$($line) $($word)" }
        }
    }
    if ($line -ne "") {
        # Rellenar con espacios
        $pad = 64 - $line.Length
        if ($pad -lt 0) { $pad = 0 }
        $spaces = " " * $pad
        Write-Host "   $fgDarkGray|   | $fgGray$($line)$($spaces)$fgDarkGray|$reset"
    }
    
    Write-Host "   $fgDarkGray|   +------------------------------------------------------------------+$reset"
    Write-Host "   $fgDarkGray+$reset`n"
}

# Panel de Controles Rápidos y Comandos
Write-Host " $bold$fgWhite+-- [ SOPORTE DE DESARROLLO ANTIGRAVITY & COMANDOS ] --------------------------+$reset"
Write-Host "  $fgGray Para avanzar de forma interactiva o ejecutar tareas, te sugiero:$reset"
Write-Host "  $bold$fgAccent 1.$reset Usa $bold/goal$reset en el chat si quieres que complete una de las etapas en lote."
Write-Host "  $bold$fgAccent 2.$reset Usa $bold/schedule$reset para calendarizar recordatorios automáticos de entrega."
Write-Host "  $bold$fgAccent 3.$reset Corre $bold.\Show-Dashboard.ps1$reset en PowerShell para refrescar este tablero."
Write-Host " $bold$fgWhite+-----------------------------------------------------------------------------+$reset`n"
